"use client";

import React, { useState } from "react";
import { mockPatient } from "@/entities/patient/api/mock-patient";
import { ChevronDown } from "lucide-react";

export function PatientHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const patient = mockPatient;

  // Extract TNM staging
  const extractStage = (disease: any) => {
    if (!disease || !disease.stage) return null;
    const stage = disease.stage;
    const parts = [];
    if (stage.t) parts.push(`T${stage.t}`);
    if (stage.n) parts.push(`N${stage.n}`);
    if (stage.m) parts.push(`M${stage.m}`);
    return parts.join(" ");
  };

  // Extract IHC markers (PR, ER)
  const extractIHC = (pathology: any) => {
    if (!pathology || !pathology.ihc) return {};
    const ihc = pathology.ihc;
    return {
      pr: ihc.PR,
      er: ihc.ER,
      her2: ihc.HER2,
    };
  };

  const disease = patient?.diseaseCharacteristics;
  const pathology = patient?.pathology;
  const treatment = patient?.treatmentPlan;
  const tnm = extractStage(disease);
  const ihc = extractIHC(pathology);

  const patientId = patient?.id || "P-001";
  const diagnosis = disease?.primaryDiagnosis || "Diagnosis";
  const prStatus =
    ihc.pr?.toLowerCase() === "positive" ? "positive" : "negative";
  const erStatus =
    ihc.er?.toLowerCase() === "positive" ? "positive" : "negative";

  const Badge = ({
    text,
    variant,
  }: {
    text: string;
    variant: "positive" | "negative" | "neutral";
  }) => {
    const variants = {
      positive: "bg-green-100 text-green-800",
      negative: "bg-red-100 text-red-900",
      neutral: "bg-gray-100 text-gray-700",
    };
    return (
      <span
        className={`inline-block px-2 py-1 rounded text-xs font-semibold uppercase ${variants[variant]}`}
      >
        {text}
      </span>
    );
  };

  const DataRow = ({
    label,
    value,
    variant,
  }: {
    label: string;
    value: React.ReactNode;
    variant?: "positive" | "negative";
  }) => {
    const valueClass =
      variant === "positive"
        ? "text-green-600 font-bold"
        : variant === "negative"
          ? "text-red-600 font-bold"
          : "text-gray-900 font-semibold";
    return (
      <div className="flex justify-between items-start text-sm pb-2 border-b border-gray-200 last:border-b-0">
        <span className="text-gray-500 font-medium min-w-max">{label}</span>
        <span className={valueClass}>{value}</span>
      </div>
    );
  };

  const Card = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md hover:border-green-600 transition-all">
      <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-3 flex items-center gap-2">
        <span>{icon}</span>
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Header Toggle */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-5 flex items-center justify-between cursor-pointer hover:bg-green-50 transition-colors user-select-none"
        >
          <div className="flex items-center gap-4 flex-1">
            {/* Patient Badge */}
            <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-green-600 text-white font-bold text-base flex-shrink-0">
              {patientId}
            </div>

            {/* Patient Info */}
            <div className="flex-1">
              {/* Header Row */}
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-black text-gray-900">
                    {patientId}
                  </h2>
                  <p className="text-sm font-semibold text-gray-900 border-l-4 border-green-600 pl-3">
                    {diagnosis}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-900 rounded text-xs font-bold border border-red-200">
                  <span>🔴</span>
                  <span>ONCO</span>
                </div>
              </div>

              {/* Critical Data */}
              <div className="flex gap-5 flex-wrap text-sm">
                {tnm && (
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                    <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">
                      TNM:
                    </span>
                    <span className="text-gray-900 font-bold">{tnm}</span>
                  </div>
                )}
                {ihc.pr && (
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                    <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">
                      PR:
                    </span>
                    <span
                      className={
                        prStatus === "positive"
                          ? "text-green-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {ihc.pr}
                    </span>
                  </div>
                )}
                {ihc.er && (
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded border border-gray-200">
                    <span className="text-gray-500 font-bold text-xs uppercase tracking-wider">
                      ER:
                    </span>
                    <span
                      className={
                        erStatus === "positive"
                          ? "text-green-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {ihc.er}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Toggle Icon */}
          <div className="ml-4">
            <ChevronDown
              size={24}
              className={`text-green-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {/* Expandable Details */}
        {isOpen && (
          <div className="border-t border-gray-200 p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Pathology Card */}
              {pathology && (
                <Card title="Pathology" icon="🧬">
                  <DataRow
                    label="Histology"
                    value={pathology.histology || "IDC"}
                  />
                  <DataRow
                    label="Grade"
                    value={
                      <Badge
                        text={pathology.grade || "II"}
                        variant="positive"
                      />
                    }
                  />
                  <DataRow
                    label="ER Status"
                    value={<Badge text={ihc.er || "N/A"} variant={erStatus} />}
                  />
                  <DataRow
                    label="PR Status"
                    value={<Badge text={ihc.pr || "N/A"} variant={prStatus} />}
                  />
                  <DataRow
                    label="HER2 Status"
                    value={
                      <Badge text={ihc.her2 || "N/A"} variant="negative" />
                    }
                  />
                  <DataRow label="Ki-67" value={pathology.ki67 || "N/A"} />
                </Card>
              )}

              {/* Treatment Plan Card */}
              {treatment && (
                <Card title="Treatment Plan" icon="💊">
                  <DataRow
                    label="Intent"
                    value={treatment.intent || "Curative"}
                  />
                  <DataRow
                    label="Start Date"
                    value={treatment.startDate || "N/A"}
                  />
                  <DataRow
                    label="Modality"
                    value={treatment.modality || "N/A"}
                  />
                  <DataRow
                    label="Protocol"
                    value={treatment.protocol || "N/A"}
                  />
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
