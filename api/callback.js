export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { refno, status, reason, billcode, order_id, amount } = req.body || {};
    console.log(`[ToyyibPay Callback] Order: ${order_id}, Status: ${status}, Bill: ${billcode}, Amount: ${amount}`);
    return res.status(200).send("OK");
  }
  return res.status(200).json({ message: "ToyyibPay Webhook Endpoint Active" });
}
