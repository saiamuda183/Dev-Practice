function fetchVitalsReferenceData() {
  const dataViewName = "D_VitalsReference";
  const parameters = {
    // Add any parameters if needed, e.g., patientId: "12345"
  };
  const paging = {
    pageNumber: 1,
    pageSize: 50, // Adjust as needed
  };
  const query = {
    distinctResultsOnly: false,
    select: [
      { field: "MinSugar" },
      { field: "MaxSugar" },
      { field: "MinBPM" },
      { field: "MaxBPM" },
      { field: "Result" },
    ],
  };
  const dataPageUtils = window?.PCore?.getDataPageUtils();
  const context = window?.PConnect?.getContextName();

  // if (!dataPageUtils || !context) {
  //   console.error(
  //     "PCore.getDataPageUtils or PConnect.getContextName is not available.",
  //   );
  //   return Promise.resolve([]);
  // }

  return dataPageUtils
    .getDataAsync(dataViewName, context, parameters, paging, query)
    .then((response) => {
      let entries: any[] = [];

      if (response && Array.isArray(response.data)) {
        entries = response.data;
      }

      return entries;
    })
    .catch((error) => {
      console.error("Error fetching D_VitalsReference:", error);
      return [];
    });
}

function findMatchingResult(
  sugar: number,
  bpm: number,
  referenceData: any[],
): string {
  for (const row of referenceData) {
    const minSugar = parseFloat(row.MinSugar);
    const maxSugar = parseFloat(row.MaxSugar);
    const minBPM = parseFloat(row.MinBPM);
    const maxBPM = parseFloat(row.MaxBPM);

    if (
      sugar >= minSugar &&
      sugar <= maxSugar &&
      bpm >= minBPM &&
      bpm <= maxBPM
    ) {
      return row.Result;
    }
  }

  return "No matching result found";
}

export { fetchVitalsReferenceData, findMatchingResult };
