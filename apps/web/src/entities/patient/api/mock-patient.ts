export const mockPatient = {
  patient_id: "P-001",
  file_number: "30031",
  national_code: "4970111111",
  disease_characteristics: {
    laterality: "left",
    primary_site: "breast",
    stage: {
      system: "AJCC 8th",
      t: "2",
      n: "1",
      m: "0",
      overall_stage: "IIA",
    },
  },
  pathology: {
    histology: "invasive ductal carcinoma",
    grade: "2",
    report_date: "2024-01-15",
    lab: "XYZ Pathology Lab",
    specimen_id: "P23-1002",
    ihc: {
      ER: "positive",
      PR: "negative",
      HER2: "3+",
      Ki67: "25%",
    },
    molecular: {
      BRCA1: "negative",
      BRCA2: "VUS",
      EGFR: "wild type",
    },
  },
  imaging_baseline: {
    ct_scan: {
      date: "2024-01-18",
      findings: "left breast mass 3.1 cm, single axillary node, no distant mets",
    },
    pet_ct: {
      date: "2024-01-22",
      findings: "FDG avid breast lesion, no bone uptake",
    },
    bone_scan: {
      date: "2024-01-20",
      findings: "no skeletal metastases",
    },
  },
  treatment_plan_baseline: {
    intent: "curative",
    planned_regimen: "AC-T",
    start_date: "2024-02-01",
  },
  metadata: {
    data_version: "1.0",
    entered_by: "Dr. Pagheh",
    source_doc_id: "path_2024_001",
    last_reviewed: "2024-02-05",
  },
  type: "oncologic",
  cc: "breast mass",
  primary_diagnosis: "breast cancer",
};
