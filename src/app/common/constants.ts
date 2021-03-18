export class Constants {
    public static readonly labResultsMap: Map<string, PatientLabResultsMap[]> = new Map<string, PatientLabResultsMap[]>([
        ["ckd", [
            {
                name: "UACR",
                value: "2.16.840.1.113883.3.6929.2.1002",
                type: "valueset"
            },
            {
                name: "Serum Creatinine",
                value: "2.16.840.1.113762.1.4.1222.111",
                type: "valueset"
            },
            {
                name: "Hemoglobin",
                value: "2.16.840.1.113762.1.4.1222.114",
                type: "valueset"
            },
            {
                name: "A1C",
                value: "2.16.840.1.113762.1.4.1222.119",
                type: "valueset"
            },
            {
                name: "Serum Potassium",
                value: "2.16.840.1.113762.1.4.1222.120",
                type: "valueset"
            },
            {
                name: "Serum Phosphorus",
                value: "2.16.840.1.113762.1.4.1222.123",
                type: "valueset"
            },
            {
                name: "Calcium",
                value: "17861-6",
                type: "code"
            },
            {
                name: "Serum Albumin",
                value: "2.16.840.1.113762.1.4.1222.151",
                type: "valueset"
            },
            {
                name: "Transferrin Saturation",
                value: "2.16.840.1.113762.1.4.1222.118",
                type: "valueset"
            },
            {
                name: "Ferritin",
                value: "2.16.840.1.113762.1.4.1222.140",
                type: "valueset"
            },
            {
                name: "Blood Urea Nitrogen",
                value: "2.16.840.1.113762.1.4.1222.113",
                type: "valueset"
            },
            {
                name: "LDL",
                value: "2.16.840.1.113883.3.117.1.7.1.215",
                type: "valueset"
            },
            {
                name: "HDL",
                value: "2.16.840.1.113762.1.4.1222.135",
                type: "valueset"
            },
            {
                name: "Triglycerides",
                value: "2.16.840.1.113762.1.4.1222.137",
                type: "valueset"
            },
            {
                name: "Total Cholesterol",
                value: "2.16.840.1.113762.1.4.1222.139",
                type: "valueset"
            },
            {
                name: "Vitamin D",
                value: "2.16.840.1.113762.1.4.1222.126",
                type: "valueset"
            },
            {
                name: "KT/V",
                value: "2.16.840.1.113762.1.4.1222.128",
                type: "valueset"
            },
            {
                name: "Intact Parathyroid Hormone",
                value: "2.16.840.1.113762.1.4.1222.129",
                type: "valueset"
            },
            {
                name: "Serum Bicarbonate",
                value: "2.16.840.1.113762.1.4.1222.130",
                type: "valueset"
            },
            {
                name: "Sodium",
                value: "2.16.840.1.113762.1.4.1222.131",
                type: "valueset"
            },
            {
                name: "Chloride",
                value: "2.16.840.1.113762.1.4.1222.132",
                type: "valueset"
            },
            {
                name: "PTH",
                value: "2.16.840.1.113762.1.4.1222.129",
                type: "valueset"
            }
        ]]
    ]);

    public static readonly vitalSignsMap: Map<string, PatientLabResultsMap[]> = new Map<string, PatientLabResultsMap[]>([
        ["ckd", [
            {
                name: "Cognitive Status",
                value: "72172-0",
                type: "question"
            },
            {
                name: "Fatigue",
                value: "77864-7",
                type: "question"
            },
            {
                name: "Functional Status",
                value: "77827-4",
                type: "question"
            },
            {
                name: "Pain Interference",
                value: "77865-4",
                type: "question"
            },
            {
                name: "Pain Severity",
                value: "38221-8",
                type: "question"
            },
            {
                name: "PHQ9",
                value: "44261-6",
                type: "question"
            }
        ]]
    ]);
    static WotIsLoaded: string = "WOT-Is-Loaded-patient-app-1";
    static BPisLoaded: string = "BP-is-Loaded-patient-app-1";
    static EGFRisLoaded: string = "EGFR-is-Loaded-patient-app-1";
    static UACRisLoaded: string = "UACR-is-Loaded-patient-app-1";
    static ActiveDiagnosisIsLoaded: string = "ActiveDiagnosis-is-ready-patient-app-1";
    static SocialConcernsIsLoaded: string = "SocialConcerns-is-ready-patient-app-1";
    static InActiveDiagnosisIsLoaded: string = "InActiveDiagnosis-is-ready-patient-app-1";
    static EducationIsLoaded: string = "Education-is-loaded-patient-app-1";
    static CounselingIsLoaded: string = "Counseling-is-loaded-patient-app-1";
    static ReferralsIsLoaded: string = "Referrals-is-loaded-patient-app-1";
}

interface PatientLabResultsMap {
    name: string;
    value: string;
    type: string;
}