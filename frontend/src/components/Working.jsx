import React from 'react';
import './Working.css'; // Assuming you add custom styles here

function Working() {
  return (
    <>
    <div>
        <h1 className='font-semibold text-4xl leading-tight pl-10'>Explore the Journey</h1>
    </div>
      <div className="flex justify-center items-center my-10">
        <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Pizza" />
            </div>
            {/* Cloning the items for seamless looping */}
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
