import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './LastSection.css'

function LastSection() {
    return (
        <Row>
            <h3 className='fw-bold'>BBC IN OTHER LANGUAGES</h3>
            <Col lg={6}>
                <div className='d-flex gap-3'>
                    <div className='d-flex flex-column'>
                        <h5 className='fw-bold'>Vietnamese</h5>
                        <p>Hoa Kỳ: Tổng thống đọc Thông điệp Liên bang để làm gì?</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className='fw-bold'>Indonesian</h5>
                        <p>Amerika Serikat tembak jatuh 'balon pengintai' China di atas laut</p>
                    </div>
                    <div className='d-flex flex-column'>
                        <h5 className='fw-bold'>Japanese</h5>
                        <p>米軍、中国の気球を撃墜　大西洋上で</p>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <h5 className='fw-bold'>More Languages</h5>
                <Row>
                    <Col lg={3}><p>Arabic عربي</p></Col>
                    <Col lg={3}><p>Azeri AZƏRBAYCAN</p></Col>
                    <Col lg={3}><p>Bangla বাংলা</p></Col>
                    <Col lg={3}><p>Burmese မြန်မာ</p></Col>
                    <Col lg={3}><p>Chinese 中文网</p></Col>
                    <Col lg={3}><p>French AFRIQUE</p></Col>
                    <Col lg={3}><p>Hausa HAUSA</p></Col>
                    <Col lg={3}><p>Hindi हिन्दी</p></Col>
                    <Col lg={3}><p>Indonesian INDONESIA</p></Col>
                    <Col lg={3}><p>Japanese 日本語</p></Col>
                    <Col lg={3}><p>Kinyarwanda GAHUZA</p></Col>
                    <Col lg={3}><p>Kirundi KIRUNDI</p></Col>
                    <Col lg={3}><p>Kyrgyz Кыргыз</p></Col>
                    <Col lg={3}><p>Marathi मराठी</p></Col>
                    <Col lg={3}><p>Nepali नेपाली</p></Col>
                    <Col lg={3}><p>Pashto پښتو</p></Col>
                    <Col lg={3}><p>Persian فارسی</p></Col>
                    <Col lg={3}><p>Portuguese BRASIL</p></Col>
                    <Col lg={3}><p>Somali SOMALI</p></Col>
                    <Col lg={3}><p>Sinhala සිංහල</p></Col>
                    <Col lg={3}><p>Spanish MUNDO</p></Col>
                    <Col lg={3}><p>Turkish TÜRKÇEL</p></Col>
                    <Col lg={3}><p>Ukrainian УКРАЇНСЬКA</p></Col>
                    <Col lg={3}><p>Vietnamese TIẾNG VIỆT</p></Col>
                </Row>
            </Col>
        </Row>
    );
}

export default LastSection;