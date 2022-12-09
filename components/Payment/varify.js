// Manage core logic by this variable
var Settlement = [];
Settlement.array_key_exists = function (key, search) {
  if (
    !search ||
    (search.constructor !== Array && search.constructor !== Object)
  ) {
    return false;
  }
  return key in search;
};
//---------------------------------
// kalkicode.com
// These methods have not been changed by our tools.
// curl_init
// curl_setopt
// curl_exec
// curl_close
// json_decode
//----------------------------

//check if request was made with the right data
if (
  !_SERVER["REQUEST_METHOD"] == "POST" ||
  !typeof _POST["reference"] !== "undefined"
) {
  die("Transaction reference not found");
}
//set reference to a variable @ref
reference = _POST["reference"];
//The parameter after verify/ is the transaction reference to be verified
url = "https://api.paystack.co/transaction/verify/" + reference;
ch = curl_init();
curl_setopt(ch, CURLOPT_URL, url);
curl_setopt(ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt(ch, CURLOPT_HTTPHEADER, {0:'Authorization: Bearer sk_test_b784617507a44f632aa33c8c5af80f5f177eb795'});
curl_setopt(ch, CURLOPT_HTTPHEADER, {
  0: "Authorization: Bearer sk_live_451239effa3005233c15983c7b36fb630cf1b826",
});

//send request
request = curl_exec(ch);
//close connection
curl_close(ch);
//declare an array that will contain the result
result = {};
if (request) {
  result = json_decode(request, true);
}
if (
  Settlement.array_key_exists("data", result) &&
  Settlement.array_key_exists("status", result["data"]) &&
  result["data"]["status"] === "success"
) {
  console.log("success");
  //Perform necessary action
} else {
  console.log("Transaction was unsuccessful");
}
