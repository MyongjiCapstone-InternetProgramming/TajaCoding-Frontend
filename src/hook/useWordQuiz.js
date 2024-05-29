// 개념퀴즈 훅 - 담당자 채윤 (240529)
const API_URL = process.env.REACT_APP_API_URL;
export default function useWordQuiz(){
    const getWordQuiz = async(language) => {
        try {
            const response = await fetch(`${API_URL}/api/wordquiz?language=${language}`)
            const result = await response.json();
            return result;
        } catch (error) {
            return {status:400, data:{message:'WordQuizGet Server Error'}};
        }
    }
    return {getWordQuiz}
}