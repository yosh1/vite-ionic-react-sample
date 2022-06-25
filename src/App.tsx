import React, { useState } from "react";
import "./App.css";
import {
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonApp,
  IonToolbar,
  IonHeader,
  IonButtons,
  IonBackButton,
  IonButton,
  IonTitle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, useHistory } from "react-router-dom";

// /* Core CSS required for Ionic components to work properly */
// import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path='/home' component={HomePage} exact={true} />
          <Route path='/detail' component={DetailPage} exact={true} />
          <Route path='/' exact={true}>
            <Redirect to='/home' />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

function HomePage() {
  const history = useHistory();
  const nextPage = () => {
    history.push("/detail");
  };

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Homea</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <h1>HOME PAGE</h1>
          <IonButton onClick={nextPage}>NEXT PAGE</IonButton>
          <button>a</button>
        </IonContent>
      </IonPage>
  );
}

function DetailPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Detail Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <h1>DETAIL</h1>
        <IonItem detail>
          <IonLabel>More Information</IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
}

export default App;
