import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = 3000;

// Lazy initialization pattern for GoogleGenAI
let aiInstance: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiInstance) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY is not defined in user secrets or environment variables.");
    }
    aiInstance = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

// AI Expert Recruiter Agent System Prompt
const SYSTEM_INSTRUCTION = `You are "PulseAI", the personal AI Engineering Assistant and Chief of Staff representing Jelsinge Arun.
Your goal is to answer questions from tech recruiters, startup founders, YC partners, and engineering managers, selling Jelsinge's execution and technical depth honestly and proof-backed, without exaggeration or fake experience.

JELSINGE ARUN BIOGRAPHY & MATRICES:
- Title: Applied AI & Full-Stack Systems Engineer based in India.
- Email: jelsingearun.2004@gmail.com
- GitHub Profile: https://github.com/jelsingearun
- Core Philosophy: Action over talk. Edge-focused computer vision models over high-latency API wrappers. True fullstack automation logic.

KEY ENGINEERING PROJECTS IN HIS PORTFOLIO:
1. "OpenPulse (脉动)" (Generative AI & Render Compilers): An automated vertical/horizontal short-form video generation pipeline that scrapes Hacker News trends, generates HyperFrames structures via local LLMs (vLLM / LM Studio), animates scenes using GSAP inside a headless Playwright Chromium instance, and encodes frames into production-ready MP4 using FFmpeg.
2. "SentinelAI" (AI/ML & Surveillance): An edge-optimized real-time facial biometric and active threat (guns, knives) validation system using a custom YOLOv8 detection network and FaceNet512 embeddings (DeepFace) with WebSocket streaming and instant Telegram alert notifications. Fast 30 FPS.
3. "RoadCare" (Full Stack & Geospatial): A citizen mobile-ingest app with automatic image parsing (OpenCV contour filtering and EXIF GPS scraping) linked with Uber's H3 spatial index hexagonal grid system in MongoDB for risk zoning and municipality tracking.
4. "Drowsify" (AI/ML Engineering): A zero-cloud low-latency facial landmark analyzer tracking Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) with CLAH pre-filtering based on dlib 68 points, built for commercial logistics.
5. "Academix" (Full Stack & Peer Synergies): Uses client-side TensorFlow.js vector cosine-similarity embeddings to auto-match research peers based on study topics, bypassing expensive database compute overheads.
6. "GitHub DevOps Provisioner" (Automation & CLI): A Python CLI that cleans folders, runs regular expression security audits (searching for hardcoded cloud credentials), sanitizes code, and deploys clean workspaces to Remote GitHub repositories using the GraphQL V4 API.

INSTRUCTIONS:
- Keep responses professional, highly developer-aligned, technical, objective, and scannable. Avoid sales fluff and generic AI hype.
- Directly reference actual repository logic, libraries (vLLM, YOLOv8, dlib, Uber H3, Fastify, Playwright, React, FastAPI), and design decisions mentioned above.
- If asked about Jelsinge's work experience, clarify that he is a talented fresher (B.Tech expected 2026, Computer Science & AI) with heavy portfolio projects that demonstrate immediate operational capacity equivalent to intermediate software developers.
- Provide Jelsinge's contact email (jelsingearun.2004@gmail.com) and invite them to leave a message in the contact form. Keep it concise. Do not talk excessively.`;

// API routes first
app.post("/api/chat", async (req: express.Request, res: express.Response) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required" });
    }

    // Format transcript for Gemini
    const userMessage = messages[messages.length - 1]?.text || "";
    if (!userMessage) {
      return res.status(400).json({ error: "Last message content is empty" });
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      // Rich offline responsive helper representing Jelsinge's projects
      const text = userMessage.toLowerCase();
      let reply = "";

      if (text.includes("yolov8") || text.includes("surveillance") || text.includes("sentinel")) {
        reply = "Jelsinge's experience with YOLOv8 is demonstrated in 'SentinelAI' (Sentinel Security Alert Suite). He trained and fine-tuned a custom YOLOv8 model for real-time weapon (guns, knives) detection. The pipeline streams video feeds at over 30 FPS using WebSockets, runs face verification using FaceNet (FaceNet512 / DeepFace), and triggers instant security warning notifications to a Telegram robot backend.";
      } else if (text.includes("openpulse") || text.includes("video compiler") || text.includes("architecture")) {
        reply = "OpenPulse uses a modular offline rendering architecture: \n" +
                "1. Scraper: Retrieves trending tech topics from Hacker News.\n" +
                "2. Layout Planner: Generates a JSON-styled frame layout (HyperFrames) outlining typographic themes.\n" +
                "3. Animator: Feeds this config into a headless Playwright Chromium browser to run high-fidelity canvas animations via the GSAP timeline.\n" +
                "4. Compiler: Captures raw graphic steps and pipes them directly to an FFmpeg compiler process, outputting fully synchronized, high-definition MP4 clips.";
      } else if (text.includes("remote") || text.includes("yc") || text.includes("startup") || text.includes("hire") || text.includes("job")) {
        reply = "Yes! Jelsinge Arun is graduating in 2026 (B.Tech Computer Science & AI) and is actively looking for junior AI/ML, backend, or full-stack positions. He is highly interested in fast-paced YC startups, and remote workflows. Since he builds real applications instead of just reading tutorials, he can adapt immediately to rapid prototype cycles and product sprints.";
      } else if (text.includes("biometrics") || text.includes("drowsify") || text.includes("fatigue") || text.includes("landmark")) {
        reply = "The Drowsify biometric driver safety system is a completely offline (zero-cloud) analyzer built with dlib 68 facial points tracking. Designed to operate efficiently on lower-end devices, Jelsinge implemented real-time calculation of Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) with pre-filtering to identify and flag micro-sleep patterns in commercial drivers.";
      } else if (text.includes("roadcare") || text.includes("pothole") || text.includes("geospatial") || text.includes("h3")) {
        reply = "The RoadCare mobile reporting suite automates municipal pothole detection. Built with FastAPI and MongoDB, it processes user photo uploads by extracts geotags from EXIF metadata. Then, it indexes coordinates inside Uber's H3 Hexagonal spatial grid to group nearby hazard logs and chart regional density maps without duplicating records.";
      } else if (text.includes("academix") || text.includes("tensorflow.js")) {
        reply = "Academix is Jelsinge's decentralized peer matching app. Instead of running expensive similarity algorithms on a centralized server, Jelsinge compiled lightweight TensorFlow.js vector embeddings that compute cosine-similarity matches right in the user's web browser, yielding instant peer recommendations with virtually zero database overhead.";
      } else if (text.includes("git") || text.includes("devops") || text.includes("automation")) {
        reply = "Jelsinge's GitHub DevOps Provisioner is a python utility designed to clean local code repositories, run automated regular expression audits to trace accidental hardcoded secrets, exclude massive package files, and publish ready workspaces cleanly using the GitHub GraphQL v4 API.";
      } else if (text.includes("data") || text.includes("suicide") || text.includes("predict")) {
        reply = "The Suicide Rate Analysis and Modeling project uses Pandas and Seaborn to clean and study state-level mental health indexes, grouping parameters by demography and training linear/random-forest regression models in Scikit-Learn to visualize societal stress indicators.";
      } else {
        reply = "Hi! I am PulseAI, Jelsinge's Chief of Staff. Jelsinge is an India-based Junior Software Engineer (expected 2026 graduation). You can ask me about his YOLOv8 weapon alerts, OpenPulse video generator, Uber H3 geospatial hazardous mapping, or driver fatigue monitors. Drop an inquiry in the form below, or reach out to him at jelsingearun.2004@gmail.com.";
      }

      return res.json({ text: reply });
    }

    // Get the client safely (lazy loaded)
    const ai = getGeminiClient();

    // Map history to simple conversation context for Gemini
    const prompt = `System Instructions: ${SYSTEM_INSTRUCTION}\n\nUser Question: ${userMessage}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize, but I am unable to formulate an answer right now. Please reach out directly to Jelsinge at jelsingearun.2004@gmail.com.";
    res.json({ text: reply });
  } catch (error: any) {
    console.error("AI API Error:", error);
    // Graceful error fallbacks if GEMINI_API_KEY is missing
    const fallbackText = error.message.includes("GEMINI_API_KEY")
      ? "Hi! I am Jelsinge's PulseAI assistant. Jelsinge is fully available for AI Engineer roles! (Please configure the GEMINI_API_KEY in Settings > Secrets to unlock my full interactive conversational neural engine)."
      : `Error processing AI query: ${error.message}. Please contact Jelsinge directly at jelsingearun.2004@gmail.com.`;
    res.json({ text: fallbackText });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Pulse Server] Running successfully on http://0.0.0.0:${PORT}`);
  });
}

startServer();
