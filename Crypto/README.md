# Crypto Payments within SecureHosting


* Contact our Monek support line so we can enable your account for crypto payments.
* Your current checkout page will need to be downloaded from your File Manager. (Settings → File Manager).
# Required Fields

* $crypto_reference_no - Reference number (Needs to be a unique GUID)
* Add the Crypto Button to your page by inserting the value $crypto_button into your checkout page. 

    `<tr> <td>$crypto_button</td> </tr>`

    ![Crypto Button Example](./button-example.png)



## Optional Fields

* $crypto_item_name - Crypto Item name (Has a max limit of around 36 characters) - If not set it defaults to “Crypto_Payment”


## Required Settings

* $cryptoCallbackUrl - A crypto callback url which is set in the SecureHosting portal under "Advanced Settings"

---

Lastly, the confirmation template pages crypto-bad.html and crypto-good.html will need to be added to your File Manager. These can be downloaded within this repository, and customized according to your preferences.



## Troubleshoot

* The Crypto button is not showing on the page

This could be due to one of 3 reasons - $crypto_reference_no is not a unique GUID, $cryptoCallbackUrl has not be set or is incorrect, or your account has not been setup for crypto payments. 

