<template>
  <div class="col-lg-12 control-section">
    <div>
      <ejs-grid :dataSource="data">
        <e-columns>
          <e-column field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></e-column>
          <e-column field='FirstName' headerText='Name' width='140'></e-column>
          <e-column field='Title' headerText='Title' width='170'></e-column>
          <e-column field='HireDate' headerText='Hired Date' width='120' format='yMd' textAlign='Right'></e-column>
          <e-column field='ReportsTo' headerText='Reports To' width='120' textAlign='Right'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "../datasource";

Vue.use(GridPlugin);

export default Vue.extend({
  name: 'Contact',
  data: () => {
    return {
      data: employeeData.slice(0, 5),
    };
  },
});
</script>
<style>
@import "https://cdn.syncfusion.com/ej2/bootstrap5.css";
</style>