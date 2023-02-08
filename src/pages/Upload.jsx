import React, {useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Upload() {
    const [file, setFile] = useState(null)
    const handleSubmit = () => {
        console.log(file)
    }
  return (
    <div className='upload'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>COONGAMES|UPLOAD</title>
          <meta name="description" content="Browse and play games in your browser"/>
          <link rel="coongames" href="/upload" />
        </Helmet>
      <div className="wrapper">
        <form >
            <input type="file" onChange={(e) => setFile(e.target.files[0])} className='file-input' required/>
            <i className="fas fa-cloud-upload-alt"></i>
            <p>Browse File to Upload</p>
        </form>
        <section className="progress-area"  >
            <li className="row">
                <i className="fas fa-file-alt"></i>
                <div className="content">
                    <div className="details">
                        <span className="name">image_01.png . Uploading</span>
                        <span className="percent" onClick={handleSubmit}>50%</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </div>
            </li>
        </section> 
        <section className="upload-area">
            <li className="row">
                <div className="content">
                    <i className="fas fa-file-alt"></i>
                    <div className="details">
                        <span className="name">{file && file.name} . Uploading</span>
                        <span className="size">{file && file.size / 1000} KB</span>
                    </div>
                </div>
                <i className="fas fa-check"></i>
            </li>
        </section>
      </div>
    </div>
  );
}
