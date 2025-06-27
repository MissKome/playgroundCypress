import 'cypress-file-upload'
class FileUpload{
    get fileUploadLink(){
        return 'a[href="/upload"]'
    }
    get iframe() {
        return 'iframe';
    }

    get iframeBody() {
        return 'iframe';
    }



    clickFileUploadLink(){
        cy.get(this.fileUploadLink).click()
    }

    uploadFile(filePath) {
        cy.get(this.iframe).then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('input[type="file"]').attachFile(filePath);
        });
    }

    
    verifyFileUploadSuccess() {
        cy.get(this.iframe).then($iframe => {
            const $body = $iframe.contents().find('body');
    
            // Verify the uploaded file name is visible
            cy.wrap($body).contains('Blusalt.pdf').should('be.visible');
    
            // Verify the "1 file(s) selected" message appears
            cy.wrap($body).contains('1 file(s) selected').should('be.visible');
        });
    }

    dragAndDrop(){
        const filePath = 'Blusalt.pdf';
        cy.get('iframe').then($iframe => {
            const $body = $iframe.contents().find('body');

            // Step 2: Find the drag-and-drop area inside the iframe
            cy.wrap($body).find('.document-uploader.upload-box') // Ensure this is the correct selector
                .should('be.visible')
                .attachFile(filePath, { subjectType: 'drag-n-drop' }); // Perform drag-and-drop upload
            
        });
    }

    verifyDragandDrop(){
        const filePath = 'Blusalt.pdf';
        cy.get('iframe').then($iframe => {
            const $body = $iframe.contents().find('body');
        cy.wrap($body).find('.document-uploader.upload-box')
        cy.wrap($body).contains('Blusalt.pdf').should('be.visible'); // Verify file name is displayed
        cy.wrap($body).contains('1 file(s) selected').should('be.visible'); // Verify success message
        })
    }



    

}

export default FileUpload