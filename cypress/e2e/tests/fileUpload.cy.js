import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FileUpload from '../../Page/fileUpload'

const fileUpload = new FileUpload

When("I click on the file upload link",()=>{
    fileUpload.clickFileUploadLink()
    
})

Then('I upload the file clicking the Browse file button',()=>{
    fileUpload.uploadFile('Blusalt.pdf')
  
})

Then('I Verify the file is uploaded successfully',()=>{
    fileUpload.verifyFileUploadSuccess()
})

Then('I drag and drop the file',()=>{
    fileUpload.dragAndDrop()
})
Then('I Verify the file is uploaded successfully using drag and drop',()=>{
    fileUpload.verifyDragandDrop()
})