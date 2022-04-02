import React, {useState} from 'react';

const Home = ({doDownload, doUpload, data}: any) => {

    return (
        <div
            style={{
                maxWidth: '800px',
                width: '100%',
                height: 'auto',
                margin: '15% auto',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h2 style={{ textAlign: 'center' }} >
            메인페이지
            </h2>

            {/* 파일 다운로드 */}
            <div style={{ margin: '10% auto' }} >
                <button style={{width: '200px'}}>
                    <a onClick={doDownload} download>다운로드 버튼</a>
                </button>
            </div>


            {/*<button style={{ width: '200px' }} onClick={doUpload}>*/}
            {/*    업로드 버튼*/}
            {/*</button>*/}
            {/*  파일 다운로드 함수 적용 부분  */}


            {/* name을 서버쪽 single('')안에 내용이 같아야함
            🚨 서버쪽 router.post("/upload", upload.single("results"), csvController.upload);
          */}
            <div style={{ margin: '5% auto' }}>
                <label style={{cursor: 'pointer'}} htmlFor="companyImage">
                    <img src="" alt=""/>
                    <p>파일선택</p>
                    <input
                        type="file"
                        name="results"
                        accept="text/csv/*"
                        multiple
                        onChange={doUpload}
                    />
                </label>
            </div>

        </div>
    );
};

export default Home;