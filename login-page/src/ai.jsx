/* eslint-disable no-unused-vars */
// server.js or routes/gemini.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
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
  return response;
  // console.log(response);
}

const PoemExplanationPopup = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const { poem } = data;

  async function handlePopup() {
    setShowPopup(true);

    if (!explanation) {
      setLoading(true);
      try {
        const response = await generateRespones(poem);
        setExplanation(response);
      } catch (err) {
        console.error("Error fetching explanation:", err);
        setExplanation("❌ व्याख्या लोड नहीं हो सकी। कृपया पुनः प्रयास करें।");
      }
      setLoading(false);
    }
  }

  return (
    <div className="fit-content max-width relative">
      {/* Trigger Button */}
      <button
        onClick={handlePopup}
        className="rounded-lg bg-orange-500 px-4 py-2 text-white shadow transition-all duration-500 hover:bg-red-500"
      >
        Explain Using AI
      </button>

      {/* Popup Box */}
      {showPopup && (
        <div className="absolute top-12 right-0 z-50 max-h-96 w-80 overflow-y-auto rounded-xl border border-orange-300 bg-white/90 p-4 shadow-xl backdrop-blur-lg transition-all duration-500">
          <h3 className="mb-2 text-lg font-semibold text-orange-700">
            व्याख्या
          </h3>

          {loading ? (
            <p className="text-sm text-gray-500 italic">
              🔄 व्याख्या लोड हो रही है...
            </p>
          ) : (
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p
                    className="text-sm leading-relaxed text-gray-800"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong
                    className="font-semibold text-orange-700"
                    {...props}
                  />
                ),
                em: ({ node, ...props }) => (
                  <em className="text-gray-600 italic" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="ml-4 list-disc" {...props} />
                ),
              }}
            >
              {explanation}
            </ReactMarkdown>
          )}

          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 rounded-md bg-orange-200 px-3 py-1 text-sm text-orange-800 transition-all hover:bg-orange-300"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PoemExplanationPopup;

generateRespones(`चाँदनी रात की चुप सी बातों में,
मन की हर उलझन सुलझती जाती है।
ठंडी हवाओं का मीठा स्पर्श,
जैसे माँ की ममता बहती जाती है।

टूटे सपनों की राख में भी,
कुछ उम्मीदें मुस्कुराती हैं।
हर अंधेरे के बाद सुबह आती है,
ये प्रकृति हमें समझाती है।
`);
