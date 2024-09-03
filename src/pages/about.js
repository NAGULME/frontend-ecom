import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div style={{ position: 'relative', height: '70vh', width: '100%', overflow: 'hidden' }}>
        <div>
          <video 
            src='https://res.cloudinary.com/dxi76chcp/video/upload/v1724150749/Rainbow_Nebula_4K_Motion_Background_xuhegh.mp4' 
            autoPlay 
            loop 
            muted 
            style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          />
        </div>
        <div style={{ top: '0', left: '0', position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}></div>
        
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'whitesmoke', zIndex: '2' }}>
          <div style={{ textAlign: 'center' }}>
            <p>About Us</p>
            <h1>Embarking on the Path to Our Dreams</h1>
            <p>Share some details here. This is a flexible section where you can share anything you want. It could be details or some information.</p>
          </div>
        </div>
      </div>
      
    </Layout>
  );
}
