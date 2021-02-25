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
    <component :is="selectedTab"></component>
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