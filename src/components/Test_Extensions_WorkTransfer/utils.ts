export function fetchWorkTransferTableData() {
  const dataViewName = "D_WorkBasket";
  const parameters = {
    // Add any filters or parameters if needed
  };
  const paging = {
    pageNumber: 1,
    pageSize: 50,
  };
  const query = {
    distinctResultsOnly: false,
    select: [
      { field: "pxRefObjectInsName" },
      { field: "pxCreateDateTime" },
      { field: "pyLabel" },
      { field: "pyAssignmentStatus" },
    ],
  };

  const dataPageUtils = window?.PCore?.getDataPageUtils();
  const context = window?.PConnect?.getContextName();

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
      console.error("Error fetching Work Transfer Table data:", error);
      return [];
    });
}
