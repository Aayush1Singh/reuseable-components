/* eslint-disable no-unused-vars */
// server.js or routes/gemini.js

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateRespones(poem) {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyA0nnq1TqDs4_A4LhxCArnGntKu2Juz4P0",
  ); // put your key in .env
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `आपको नीचे एक हिंदी कविता दी गई है। कृपया इसे ध्यान से पढ़ें और इसका एक भावनात्मक, गहराई से भरा और स्पष्ट विश्लेषण प्रस्तुत करें।

आपका उत्तर निम्नलिखित बिंदुओं को कवर करे:

1. **पंक्ति दर पंक्ति** इस कविता का **सरल और स्पष्ट अर्थ** लिखें।
2. कविता में **कवि क्या कहना चाहता है**, इसका **भावार्थ** अपने शब्दों में समझाइए।
3. कविता में **कौन-कौन सी भावनाएँ** व्यक्त हुई हैं? (जैसे प्रेम, विरह, प्रकृति, आत्ममंथन आदि)
4. यदि कविता में **प्रतीक, रूपक, अनुप्रास** या कोई अन्य **अलंकार** का प्रयोग हुआ हो तो उन्हें पहचानिए और उनका अर्थ स्पष्ट कीजिए।
5. यह कविता **पाठक के मन पर क्या प्रभाव** डाल सकती है — यह भी बताइए।
6. **यदि संभव हो, तो कविता का सारांश भी दें**, ताकि एक साधारण पाठक भी इस कविता को समझ सके।

उत्तर **सरल, मधुर, और शिक्षाप्रद भाषा** में हो — जैसे एक शिक्षक अपने छात्रों को समझाता है।

अब कविता को पढ़ें और उसका विस्तृत विश्लेषण करें:

कविता:
"""
${poem}
"""
`;
  const result = await model.generateContent(prompt);
  // const explanation = await result.response.text();
  const response = await result.response.text();
  console.log(response);
}
generateRespones(`चाँदनी रात की चुप सी बातों में,  
मन की हर उलझन सुलझती जाती है।  
ठंडी हवाओं का मीठा स्पर्श,  
जैसे माँ की ममता बहती जाती है।  

टूटे सपनों की राख में भी,  
कुछ उम्मीदें मुस्कुराती हैं।  
हर अंधेरे के बाद सुबह आती है,  
ये प्रकृति हमें समझाती है।
`);
// router.post("/generate", async (req, res) => {
//   try {
//     const prompt = req.body.prompt;
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     res.json({ text: response.text() });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Generation failed" });
//   }
// });

// export default router;
