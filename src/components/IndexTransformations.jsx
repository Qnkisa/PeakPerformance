import React, { useState } from 'react'
import IndexTransformationComponent from './IndexTransformationComponent';

export default function IndexTransformations() {
  const [showMen, setShowMen] = useState(true);
  const [showWomen, setShowWomen] = useState(false);

  const handleRadioChange = (event) => {
    if (event.target.value === 'men') {
      setShowMen(true);
      setShowWomen(false);
    } else if (event.target.value === 'women') {
      setShowMen(false);
      setShowWomen(true);
    }
  }

  return (
        <div className="index-transformations">
            <div className="index-transformations-top">
                <h5><span>Results</span> achieved by our clients</h5>
                <div className="index-transformations-radios">
                    <label className={showMen ? "showRadio" : ""}>
                    <input type="radio" name='transformations' value='men' checked={showMen} onChange={handleRadioChange}/>
                    Men
                    </label>
                    <label className={showWomen ? "showRadio" : ""}>
                    <input type="radio" name='transformations' value='women' checked={showWomen} onChange={handleRadioChange}/>
                    Women
                    </label>
                </div>
            </div>
            <div className="index-transformations-helper index-transformation-helper-men">
                <div className={`index-transformations-container index-transformations-men ${showMen ? 'show' : 'hide'}`}>
                    <IndexTransformationComponent
                        image="/transformation1-real.png"
                        nameYears = "Alexander Kim - 28yo"
                        kgDifference = "+13kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation2-real.png"
                        nameYears = "Benjamin Lee - 32yo"
                        kgDifference = "+21kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation4-real.png"
                        nameYears = "Christopher Park - 24yo"
                        kgDifference = "+15kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation5-real.png"
                        nameYears = "Daniel Song - 44yo"
                        kgDifference = "+4kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation7-helper.png"
                        nameYears = "Ethan Cho - 29yo"
                        kgDifference = "+19kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation8-real.png"
                        nameYears = "Frederick Park - 36yo"
                        kgDifference = "+7kg"
                    />
                </div>
                <div className={`index-transformations-container index-transformations-women ${showWomen ? 'show' : 'hide'}`}>
                    <IndexTransformationComponent
                        image="/transformation3-real.png"
                        nameYears = "Abigail Kim - 32yo"
                        kgDifference = "+7kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation6-real.png"
                        nameYears = "Bethany Park - 26yo"
                        kgDifference = "+5kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation9-real.png"
                        nameYears = "Caroline Lee - 26yo"
                        kgDifference = "+8kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation10-real.png"
                        nameYears = "Diana Kim - 21yo"
                        kgDifference = "+3kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation11-real.png"
                        nameYears = "Elizabeth Song - 28yo"
                        kgDifference = "-7kg"
                    />
                    <IndexTransformationComponent
                        image="/transformation12-real.png"
                        nameYears = "Felicity Cho - 38yo"
                        kgDifference = "+9kg"
                    />
                </div>
            </div>
        </div>
  )
}