import OpenClaw from "openclaw";

// Démarre simplement OpenClaw
async function runAgent() {
  const oc = new OpenClaw({
    apiKey: process.env.OPENAI_API_KEY,
    // autres configs d’API ici si tu veux
  });

  await oc.start();
  console.log("OpenClaw is running!");
}

runAgent();
