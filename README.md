# MedMorph Data Trust Services

Reference implementation of the MedMorph Data Trust Services to provide operations such as anonymize, pseudonymize, de-identify, and re-identify.

## About MedMorph

> The Making EHR Data More Available for Research and Public Health (MedMorph) project seeks to advance public health and patient-centered outcomes by using emerging health data and exchange standards, such as Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR) and Clinical Quality Language (CQL), to develop and implement an interoperable solution that will enable access to clinical data. The MedMorph project fits within the Centers for Disease Control and Prevention (CDC) strategic imperative of transforming how data are collected, used, and shared through modern Information Technology (IT) capabilities to save lives and improve health. The MedMorph project is funded by the Health and Human Services (HHS) Assistant Secretary for Planning and Evaluation (ASPE) Patient-Centered Outcomes Research Trust Fund (PCORTF) and executed by the Center for Surveillance, Epidemiology, and Laboratory Services (CSELS) Public Health Informatics Office (PHIO) to advance research and public health goals. 

https://build.fhir.org/ig/HL7/fhir-medmorph/index.html


## Running the Client

The Backend Service Client is provided as a NodeJS Express app. NodeJS is required to to run the app.

```sh
git clone https://github.com/mcode/medmorph-trust-services
cd medmorph-trust-services
npm install
npm start
```

With default settings, the app will now be running at `http://localhost:3005`

The client can also be run using Docker.  Ensure docker is installed and running, then run the following commands.

```sh
./build-docker-image.bat
docker-compose up
```

The app will now be running at `http:localhost:3005`

Certain configuration properties may be set in an environment file, `.env`:

```env
# Port number for the server, defaults to 3005 if not provided
PORT=3001

# Enabled debug loggers
# The app uses the debug library, see: https://github.com/visionmedia/debug
# "The DEBUG environment variable is then used to enable these based on space or comma-delimited names."
# Enable all express loggers with DEBUG=*
# Enable all loggers for just the app with DEBUG=medmorph-backend:*
DEBUG=medmorph-trust-services:*
```

# License
Copyright 2020 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.