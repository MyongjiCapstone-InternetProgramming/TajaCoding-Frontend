// 담당자 : 은희
import UserNav from "./UserNav";

export default function CustomWrite(){
    return(
        <div style={{height:'100%'}}>
            <UserNav/>
            <div style={{  marginTop: '60px',marginBottom: '20px',padding: '0.5rem 10rem', fontSize: '65px',height: '10%' }}>
                Custom WRITE
           </div>
           <div style={{ padding: '0.5rem 20rem' }}>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        placeholder="제목을 입력하세요"
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '20px',
                            border: '0.5rem solid white',
                            backgroundColor: 'black',
                            color: 'white',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        placeholder="간단한 설명을 입력하세요"
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '20px',
                            border: '0.5rem solid white',
                            backgroundColor: 'black',
                            color: 'white',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div>
                    <textarea
                        placeholder="자세한 글을 작성하세요"
                        style={{
                            width: '100%',
                            height: '400px',
                            padding: '10px',
                            fontSize: '20px',
                            border: '0.5rem dashed white',
                            backgroundColor: 'black',
                            color: 'white',
                            boxSizing: 'border-box'
                        }}
                    ></textarea>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2rem', marginBottom: '0rem' }}>
                <div style={{ fontSize: '2rem' }} className="retry-button-tag" onMouseOver={(e) => (e.target.style.color = 'limegreen')} onMouseOut={(e) => (e.target.style.color = 'white')}>
                    작성완료</div>
                </div>
            </div>
        </div>
    );
}
