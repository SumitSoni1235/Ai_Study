async function invokeai(){
    const {GoogleGenAI} = await import('@google/genai');
  

    const ai = new GoogleGenAI({
        apiKey: "AIzaSyC0lM_Hk9GHtuecXOs7kL9DKm6whRjkRoU",
       
    });
    const response = await ai.models.generateContent({
        model:"gemini-2.5-flash",
        contents:"What is the capital of India?"
    })
    console.log(response.text);
}

module.exports = {invokeai};