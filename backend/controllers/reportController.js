const CodeReview = require("../models/CodeReview");
const reviewBotPrompt = require("../prompts/reviewBotPrompt");
const JSON5 = require("json5");

exports.getAllReportsForUser = async (req, res) => {
  const { userId } = req.query;

  const reports = await CodeReview.find({ userId });

  res.status(200).json(reports);
};

exports.getReportById = async (req, res) => {
  const { reportId } = req.params;

  const report = await CodeReview.findOne({ _id: reportId });

  res.status(200).json(report);
};

exports.createReport = async (req, res) => {
  const { code, codeStandards, userId } = req.body;

  const openrouterApiKey =
    ${process.env.OPENAI_API_KEY};

  const openrouterApiUrl = ${process.env.OPENAI_API_URL};

  const result = await fetch(openrouterApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openrouterApiKey}`,
      "HTTP-Referer": ${process.env.SITE_URL}, // Optional. Site URL for rankings on openrouter.ai.
      "X-Title": ${process.env.SITE_NAME}, // Optional. Site title for rankings on openrouter.ai.
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: ${process.env.OPENAI_API_MODEL_NAME},
      messages: [
        {
          role: "system",
          content: reviewBotPrompt(codeStandards),
        },
        {
          role: "user",
          content: `${code}
					`,
        },
      ],
    }),
  });

  const data = await result.json();
  console.log(data);
  const cleaned = data.choices[0].message.content
    .replace(/```json|```/gi, "")
    .trim();

  const parsed = JSON5.parse(cleaned);
  const finalCode = { ...parsed, userId };
  console.log(finalCode);

  const report = await CodeReview.create(finalCode);

  res.status(201).json(report);
};
