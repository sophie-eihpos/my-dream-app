
/* tried to set strictNullCheck in tsconfig.json didn't help allos nulls
    ? mark after property name does not work either
    had to add | null to allow nulls
*/
export interface UserSettings {
    name: string | null,
    emailOffers: boolean | null,
    interfaceStyle: string | null,
    subscriptionType: string | null,
    notes: string | null
}
