import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// LAYOUT
import HomeLayout from '../layout/HomeLayout';

const NotFoundScreen = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [match.path]);

  return (
    <HomeLayout>
      <div className="notFound">
        <div className="notFound-wrapper">
          <h1 className="notFound__title">Page not found</h1>
          <p className="notFound__text">
            Our tiny scientists are having trouble.
            <br />
            Keep on exploring to find that info.
          </p>
          <LinkContainer to="/">
            <Button className="btn btn--orange--inverted">
              GO TO GENEALOGY
            </Button>
          </LinkContainer>
        </div>
      </div>
    </HomeLayout>
  );
};

export default NotFoundScreen;
