export default function handler(req, res) {
  res.status(200).json({
    status: "operational",
    brand: "Upcode.id Digital Commerce",
    network: "Vercel Global Edge Network",
    timestamp: new Date().toISOString(),
    store: {
      funnel: "/flow-mastery",
      delivery: "/flow-mastery-download",
      active_products: [
        {
          id: "google-flow-2026",
          name: "Blueprint Video AI Sinematik Google Flow (Veo 3.1 & Omni) 2026",
          price_myr: 15.00,
          payment_gateway: "ToyyibPay FPX"
        }
      ]
    }
  });
}
