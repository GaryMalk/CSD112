<?php
header('Content-Type: text/html');

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    echo "Order Processed Successfully!<br><br>";
    displayDefaultFields();

    switch ($_POST["paymentType"]) {
        case "creditCard":
            // If payment type is creditCard, display credit card fields
            displayCreditCardFields();
            break;
        case "applePay":
            // If payment type is applePay, display ApplePay fields
            displayApplePayFields();
            break;
        case "googlePay":
            // If payment type is googlePay, display GooglePay fields
            displayGooglePayFields();
            break;
        default:
            displayCreditCardFields();
    }

    // Retrieve if Shipping address is same as billing
    $sameAddress = test_input(isset($_POST["sameadr"]) ? $_POST["sameadr"] : "Not checked");
    
    echo "<br>Shipping address same as billing: " . ($sameAddress ? "Yes" : "No") . "<br>";
}

function displayDefaultFields(){
    // Retrieve Full Name
    $fullName = test_input($_POST["firstname"]);
    
    $email = test_input($_POST["email"]);

    // Retrieve Phone Number
    $phone = test_input($_POST["phone"]);

    // Retrieve Address
    $address = test_input($_POST["address"]);

    // Retrieve City
    $city = test_input($_POST["city"]);

    // Retrieve State
    $state = test_input($_POST["state"]);

    // Retrieve Zip
    $zip = $_POST["zip"];

    echo "Full Name: " . $fullName . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Phone: " . $phone . "<br>";
    echo "Address: " . $address . "<br>";
    echo "City: " . $city . "<br>";
    echo "State: " . $state . "<br>";
    echo "Zip: " . $zip . "<br><br>";
}

function displayCreditCardFields(){
    // Retrieve Name on Card
    $cardName = test_input($_POST["cardname"]);

    // Retrieve Credit Card Number
    $cardNumber = test_input($_POST["cardnumber"]);
    $maskedCardNumber = str_repeat("*", strlen($cardNumber) - 4) . substr($cardNumber, -4);

    // Retrieve Expiry Month
    $expMonth = test_input($_POST["expmonth"]);

    // Retrieve Expiry Year
    $expYear = test_input($_POST["expyear"]);

    // Retrieve CVV
    $cvv = test_input($_POST["cvv"]);

    echo "Name on Card: " . $cardName . "<br>";
    echo "Credit Card Number: " . $maskedCardNumber . "<br>";
    echo "Expiry Month: " . $expMonth . "<br>";
    echo "Expiry Year: " . $expYear . "<br>";
    echo "CVV: " . $cvv . "<br><br>";
}

function displayApplePayFields(){
    echo "ApplePay fields:<br>";
    echo "Email: " . test_input($_POST["applePay"]) . "<br>";
}

function displayGooglePayFields(){
    echo "GooglePay fields:<br>";
    echo "Email: " . test_input($_POST["googlePay"]) . "<br>";
}


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>