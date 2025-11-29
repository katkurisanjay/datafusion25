# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for the registration form.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Data Fusion 2025 Registrations"
4. Set up the following columns in the first row:
   - A1: Timestamp
   - B1: Student Name
   - C1: Branch
   - D1: Roll No
   - E1: Section
   - F1: Gender
   - G1: Email
   - H1: Mobile

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any default code and paste the following:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append data to the sheet
    sheet.appendRow([
      data.timestamp || new Date(),
      data.studentName,
      data.branch,
      data.rollNo,
      data.section,
      data.gender,
      data.email,
      data.mobile,
      data.collegeName,
      data.transactionId,
      data.paymentMethod
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Give it a name like "DataFusionRegistrationHandler"

## Step 3: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Data Fusion 2025 Registration Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize the script when prompted:
   - Click **Review Permissions**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web app URL** that appears

## Step 4: Update the Website

1. Open `src/components/Register.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the Web app URL you copied
4. Save the file

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the registration section
3. Fill out the form and submit
4. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

### Data not appearing in the sheet
- Make sure the Web app is deployed with "Anyone" access
- Check that the script has the correct permissions
- Verify the column headers match exactly

### CORS errors
- The form uses `mode: 'no-cors'` which means you won't see response errors
- Check the browser console for any issues
- Verify the Google Apps Script URL is correct

### Permission errors
- Make sure you've authorized the script with all required permissions
- Try redeploying the web app

## Security Notes

- The current setup allows anyone to submit data
- For production, consider adding:
  - Rate limiting
  - CAPTCHA verification
  - Email validation on the server side
  - Data sanitization

## Alternative: Using Google Forms

If you prefer a simpler solution, you can:
1. Create a Google Form with the same fields
2. Get the form's submission URL
3. Update the form action in `Register.tsx` to point to the Google Form

However, this method provides less control over the submission process and styling.

