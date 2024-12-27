import React from 'react';
import './MAT188.css';

const MAT188 = () => {
    const Link = () => {
        window.open("https://docs.google.com/document/d/1mVlZRoswGL2VKRowYB4g62d0aQ2bcIna6p5HzuYvOdg/edit?tab=t.0", "_blank");
    };

    return (
        <div className="mat188-container">
            <div className="title188">
                <a href="https://engineering.calendar.utoronto.ca/course/mat188h1" target="_blank" rel="noopener noreferrer">
                    <p>MAT188: Linear Algebra</p>
                </a>
            </div>
            <p>
                This course covers systems of linear equations and Gaussian elimination, applications; vectors in R^n, independent sets and spanning sets; linear transformations, matrices, inverses; subspaces in R^n, basis and dimension; determinants; eigenvalues and diagonalization; systems of differential equations; dot products and orthogonal sets in R^n; projections and the Gram-Schmidt process; diagonalizing symmetric matrices; least squares approximation. Includes an introduction to numeric computation in a weekly laboratory.
            </p>
            <button className="notes-button" onClick={Link}>Notes</button>
        </div>
    );
};

export default MAT188;