import React, {Fragment} from "react";
import Main from '../components/Main/index';

function NoMatch() {
  return (
    <Fragment>
        <Main>
          <div className="container p-5 round_corner bg-white d-flex flex-column align-items-center shadow-sm">
          <div className="text-center">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </div>
      </Main>
    </Fragment>

  );
}

export default NoMatch;
