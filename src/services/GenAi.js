async function invokeai(){
    const {GoogleGenAI} = await import('@google/genai');
  

    const ai = new GoogleGenAI({
        apiKey: "AIzaSyDX0X7zsCt2DPw9m9KWU3QSXcEPuwXj9Vo",
       
    });
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:"What is the capital of India?"
    })
    console.log(response.text);
}

module.exports = {invokeai};