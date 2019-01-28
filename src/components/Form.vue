<template>
  <div  style="padding:10px;">
    <Panel title="Form Panel" :collapsible="true" :bodyStyle="{padding:'20px'}" >

      <ComboGrid
        valueField="itemid"
        textField="name"
        v-model="combo_grid_value"
        :data="combo_grid_data"
        :panelStyle="{width:'500px'}">
        <DataGrid slot="grid" :border="false">
          <GridColumn field="itemid" title="Item ID"></GridColumn>
          <GridColumn field="name" title="Name"></GridColumn>
          <GridColumn field="listprice" title="List Price" align="right"></GridColumn>
          <GridColumn field="unitcost" title="Unit Cost" align="right"></GridColumn>
          <GridColumn field="attr" title="Attribute" width="30%"></GridColumn>
          <GridColumn field="status" title="Status" align="center"></GridColumn>
        </DataGrid>
      </ComboGrid>
      <h2>Basic ComboTree</h2>
      <ComboTree :data="combo_tree_data" v-model="combo_tree_value" placeholder="Select a node">
        <Tree slot="tree"></Tree>
      </ComboTree>
      <div  style="padding:20px">
        <Slider style="width:300px;"
                :value="0"
                :showTip="true"
                :rule="[0,'|',25,'|',50,'|',75,'|',100]"></Slider>
      </div>
      <LinkButton @click="alert1()">Alert</LinkButton>
      <LinkButton @click="alert2()">Error</LinkButton>
      <LinkButton @click="alert3()">Info</LinkButton>
      <LinkButton @click="alert4()">Question</LinkButton>
      <LinkButton @click="alert5()">Warning</LinkButton>
      <div>
        <h2>Basic Dialog</h2>
        <LinkButton @click="$refs.d1.open()">Open Dialog</LinkButton>
        <Dialog ref="d1"
                :title="'Basic Dialog'"
                :dialogStyle="{width:'400px',height:'200px'}"
                :modal="true">
          <p  v-Draggable style="text-align:center;margin:50px 0;font-size:16px">The Dialog Content.</p>
        </Dialog>
      </div>
    </Panel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        combo_grid_value:
          null,
        combo_grid_data:
          [
            {
              code: "FI-SW-01",
              name: "Koi",
              unitcost: 10.0,
              status: "P",
              listprice: 36.5,
              attr: "Large",
              itemid: "EST-1"
            },
            {
              code: "K9-DL-01",
              name: "Dalmation",
              unitcost: 12.0,
              status: "P",
              listprice: 18.5,
              attr: "Spotted Adult Female",
              itemid: "EST-10"
            },
            {
              code: "RP-SN-01",
              name: "Rattlesnake",
              unitcost: 12.0,
              status: "P",
              listprice: 38.5,
              attr: "Venomless",
              itemid: "EST-11"
            },
            {
              code: "RP-SN-01",
              name: "Rattlesnake",
              unitcost: 12.0,
              status: "P",
              listprice: 26.5,
              attr: "Rattleless",
              itemid: "EST-12"
            },
            {
              code: "RP-LI-02",
              name: "Iguana",
              unitcost: 12.0,
              status: "P",
              listprice: 35.5,
              attr: "Green Adult",
              itemid: "EST-13"
            },
            {
              code: "FL-DSH-01",
              name: "Manx",
              unitcost: 12.0,
              status: "P",
              listprice: 158.5,
              attr: "Tailless",
              itemid: "EST-14"
            },
            {
              code: "FL-DSH-01",
              name: "Manx",
              unitcost: 12.0,
              status: "P",
              listprice: 83.5,
              attr: "With tail",
              itemid: "EST-15"
            },
            {
              code: "FL-DLH-02",
              name: "Persian",
              unitcost: 12.0,
              status: "P",
              listprice: 23.5,
              attr: "Adult Female",
              itemid: "EST-16"
            },
            {
              code: "FL-DLH-02",
              name: "Persian",
              unitcost: 12.0,
              status: "P",
              listprice: 89.5,
              attr: "Adult Male",
              itemid: "EST-17"
            },
            {
              code: "AV-CB-01",
              name: "Amazon Parrot",
              unitcost: 92.0,
              status: "P",
              listprice: 63.5,
              attr: "Adult Male",
              itemid: "EST-18"
            }
          ],
        combo_tree_value: null,
        combo_tree_data: [
          {
            id: 1,
            text: "My Documents",
            children: [
              {
                id: 11,
                text: "Photos",
                state: "closed",
                children: [
                  {
                    id: 111,
                    text: "Friend"
                  },
                  {
                    id: 112,
                    text: "Wife"
                  },
                  {
                    id: 113,
                    text: "Company"
                  }
                ]
              },
              {
                id: 12,
                text: "Program Files",
                children: [
                  {
                    id: 121,
                    text: "Intel"
                  },
                  {
                    id: 122,
                    text: "Java"
                  },
                  {
                    id: 123,
                    text: "Microsoft Office"
                  },
                  {
                    id: 124,
                    text: "Games"
                  }
                ]
              },
              {
                id: 13,
                text: "index.html"
              },
              {
                id: 14,
                text: "about.html"
              },
              {
                id: 15,
                text: "welcome.html"
              }
            ]
          }
        ]

      }
        ;
    },
    methods: {
      alert1() {
        this.$messager.alert({
          title: "Alert",
          msg: "Here is a message!"
        });
      },
      alert2() {
        this.$messager.alert({
          title: "Error",
          icon: "error",
          msg: "Here is an error message!"
        });
      },
      alert3() {
        this.$messager.alert({
          title: "Info",
          icon: "info",
          msg: "Here is a info message!"
        });
      },
      alert4() {
        this.$messager.alert({
          title: "Question",
          icon: "question",
          msg: "Here is a question message!"
        });
      },
      alert5() {
        this.$messager.alert({
          title: "Warning",
          icon: "warning",
          msg: "Here is a warning message!"
        });
      }
    }
  };
</script>
<style>

</style>
