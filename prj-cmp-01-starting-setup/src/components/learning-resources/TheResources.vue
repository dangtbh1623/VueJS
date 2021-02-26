<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="setModeStored"
        >Stored Resources</base-button
      >
      <base-button
        @click="setSelectedTab('add-resource')"
        :mode="setModeAdd"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import AddResource from './AddResource';
import StoredResources from './StoredResources';
export default {
  components: {
    AddResource,
    StoredResources,
  },
  provide() {
    return {
      res: this.storedResources,
      addRes: this.addResource,
      remRes: this.removeResource,
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue Documentaion',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google to learn ....',
          link: 'https://www.google.com/',
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url){
        const newRescource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newRescource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId){
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex,1);
    }
  },
  computed: {
    setModeStored() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    setModeAdd() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>