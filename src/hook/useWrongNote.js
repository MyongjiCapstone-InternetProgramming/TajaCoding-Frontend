//오답노트 관리 훅 - 담당자 은희
const API_URL = process.env.REACT_APP_API_URL;

const useWrongNote = () => {
    // 오답노트를 조회하는 함수
    const getWrongNote = async(userId) => {
        try {
            const response = await fetch(`${API_URL}/api/wrongnote?userId=${userId}`);
            const result = await response.json();
            console.log("result: ",result)
            return result;
        } catch (error) {
            return {status: 400, data: {message: 'Wrong Note Get Server Error'}};
        }
    }

    // 오답노트의 문제를 삭제하는 함수
    const deleteWrongNote = async(wrongId) => {
        try {
            const response = await fetch(`${API_URL}/api/wrongnote?wrongId=${wrongId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            return result;
        } catch (error) {
            return {status: 400, data: {message: 'Wrong Note Delete Server Error'}};
        }
    }

    return { getWrongNote, deleteWrongNote }
}

export default useWrongNote;