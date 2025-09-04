import { Preferences } from '@capacitor/preferences';

// Em loadData:
const { value } = await Preferences.get({ key: this.storageKey });
// Em saveData:
await Preferences.set({ key: this.storageKey, value: JSON.stringify(this.data) });