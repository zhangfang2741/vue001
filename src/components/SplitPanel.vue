<template>
  <div>


    <Layout style="width:100%;height:100%;min-height: 600px;  ">
      <LayoutPanel region="west" :bodyStyle="{border:'none'}" >
        <Panel >
          <template slot="header">
            <div class="f-row">
              <TextBox iconCls="icon-search"></TextBox>
            </div>
          </template>
          <Tree :data="menuData"></Tree>
          <template slot="footer">
            <div style="padding:5px">
              <LinkButton iconCls="icon-add">New</LinkButton>
              <LinkButton iconCls="icon-remove">Remove</LinkButton>
            </div>
          </template>
        </Panel>
      </LayoutPanel>
      <LayoutPanel region="center" :bodyStyle="{border:'none'}" >
        <Tabs >
          <TabPanel title="Tab1" bodyCls="f-column" :border="true">
            <datatable />
            <ButtonGroup selectionMode="single"  style="margin:10px;">
              <LinkButton iconCls="icon-add" :toggle="true" :selected="true">Add</LinkButton>
              <LinkButton iconCls="icon-remove" :toggle="true">Remove</LinkButton>
              <LinkButton iconCls="icon-save" :toggle="true">Save</LinkButton>
              <LinkButton iconCls="icon-cut" :disabled="true">Cut</LinkButton>
            </ButtonGroup>
          </TabPanel>
          <TabPanel title="Tab2"  bodyCls="f-column" :border="true"><echarts />></TabPanel>
          <TabPanel title="Tab3"  bodyCls="f-column" :border="true"><vform /></TabPanel>
          <TabPanel title="Tab4"  bodyCls="f-column" :border="true"><treeTable /></TabPanel>
          <TabPanel title="Tab5"  bodyCls="f-column" :border="true"><droppable /></TabPanel>


        </Tabs>

      </LayoutPanel>

    </Layout>
  </div>
</template>

<script>
  import DataTable from '@/components/DataTable'
  import ECharts from '@/components/ECharts'
  import Form from '@/components/Form'
  import TreeTable from '@/components/TreeTable'
  import Droppable from '@/components/Droppable'
  export default {
    components: {'datatable':DataTable,'echarts': ECharts,'vform':Form,'treeTable':TreeTable,'droppable':Droppable},
    data() {
      return {
        menuData: [
          {
            text: "Item1",
            children: [
              { text: "Item11" },
              {
                text: "Item12",
                state: "closed",
                children: [
                  { text: "Iteme121" },
                  { text: "Iteme122" },
                  { text: "Iteme123" }
                ]
              },
              { text: "Item13" },
              { text: "Item14" }
            ]
          },
          { text: "Item2" }
        ],
        gridData: [
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
        ]
      };
    }
  };
</script>
