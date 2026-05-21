import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "./15-report/report.json";

function errorSample() {
  throw new Error("Ups");
}

errorSample();
