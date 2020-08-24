import React from "react";

import {Card, IconSettings, Icon, Button} from "@salesforce/design-system-react";

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import GoogleLocationMap from "./LocationMap";
import DatePickerComponent from "./DatePickerComponent";
import SimpleTable from "./MaterialUITable";
import LodashTest from './LodashTest';
import UuidTest from './UuidTest';

library.add(fab);

const App = (props) => {
    const self = props.self;
    return (
        <IconSettings iconPath="/_slds/icons">
            <Button label="Console Log Account List" onClick={props.handleLoad}/>
            <Card heading="Google Map Component (externalAPI)"
                icon={
                    <Icon
                category="standard"
                name="custom_notification"
                size="medium"/>
                }
                bodyClassName="slds-p-horizontal_small">
                <GoogleLocationMap/>
            </Card>
            <Card heading="Material UI Library-- Table Example"
                icon={
                    <Icon
                category="standard"
                name="answer_public"
                size="medium"/>
                }
                bodyClassName="slds-p-horizontal_small">
                <SimpleTable/>
            </Card>
            <Card heading="LDS Datetime + Moment Library"
                icon={
                    <Icon
                category="standard"
                name="answer_public"
                size="medium"/>
                }
                bodyClassName="slds-p-horizontal_small">
                <DatePickerComponent/>
            </Card>
            <Card heading="Font Awesome"
                icon={
                    <Icon
                category="standard"
                name="brand"
                size="medium"/>
                }
                bodyClassName="slds-p-horizontal_small">
                <div>
                    <FontAwesomeIcon size="5x"
                        icon={
                            ["fab", "apple"]
                        }/>
                    <FontAwesomeIcon size="5x"
                        icon={
                            ["fab", "microsoft"]
                        }/>
                    <FontAwesomeIcon size="5x"
                        icon={
                            ["fab", "google"]
                        }/>
                    <FontAwesomeIcon size="5x"
                        icon={
                            ["fab", "amazon"]
                        }/>
                    <FontAwesomeIcon size="5x"
                        icon={
                            ["fab", "github"]
                        }/>
                    <FontAwesomeIcon size="5x"
                        icon={
                            ["fab", "facebook"]
                        }/>
                </div>
            </Card>
            <LodashTest/>
            <UuidTest/>
        </IconSettings>
    );
};

export default App;

