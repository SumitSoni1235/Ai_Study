async function invokeai(){
    const {GoogleGenAI} = await import('@google/genai');
  

    const ai = new GoogleGenAI({
        apiKey: "AIzaSyDOsLusGL9Q7hAhzM7yWJ3mtUneF0TByBQ",
       
    });
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:"What is the interview process for a software engineering role at Google?"
    })
    return response.text; // ✅ IMPORTANT
}

module.exports = {invokeai};