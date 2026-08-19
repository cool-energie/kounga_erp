<script setup>
const modules = [
    {
        name: 'Users',
        icon: 'mdi-card-account-details',
        path: "/security",
        color: "#90A4AE"
    },
    {
        name: 'Human resources',
        icon: 'mdi-folder-account',
        path: "/human-resources",
        color: "#00B0FF"
    },
    {
        name: 'Payment',
        icon: 'mdi-cash-fast',
        path: "/payments",
        color: "#7CB342"
    },
    {
        name: 'Accounting',
        icon: 'mdi-bank-transfer',
        path: "/accounting",
        color: "#FFEE58"
    },
    {
        name: 'Planning',
        icon: 'mdi-calendar-plus-outline',
        path: "/planning",
        color: "#D81B60"
    },
    {
        name: 'Invoicing',
        icon: 'mdi-file-document',
        path: "/invoicing",
        color: "#5C6BC0"
    },
    {
        name: 'Purchasing',
        icon: 'mdi-cash-register',
        path: "/purchasing",
        color: "#EA80FC"
    },
    {
        name: 'Inventory management',
        icon: 'mdi-store',
        path: "/inventory",
        color: "#4DB6AC"
    },
    {
        name: 'Project management',
        icon: 'mdi-timetable',
        path: "/projects",
        color: "#D32F2F"
    },
]
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-alert border="start" border-color="primary" elevation="1" class="mx-9">
                    Bienvenue sur <span class="text-primary-darken-1"> Remetu </span>
                    Votre plateforme de gestion intégrée, conçue pour simplifier vos processus, optimiser vos
                    performances et accompagner la croissance de votre entreprise.<br />

                    Avec <span class="text-primary-darken-1">Remetu</span>, vous bénéficiez d'une solution moderne,
                    sécurisée et flexible, adaptée à vos besoins spécifiques.<br />
                    👉 Centralisez vos données, gagnez en efficacité et prenez des décisions éclairées grâce à des
                    outils puissants et intuitifs.<br />

                    Commencez dès maintenant à explorer vos modules et à transformer votre manière de travailler.
                </v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="wrapper">
                    <div class="grid mx-9">
                        <v-card v-for="m in modules" :key="m.name" :color="m.color" elevation="1" hover-elevation="5"
                            class="card pa-5" :to="m.path">
                            <v-icon :icon="m.icon" size="60px" />
                            <span class="text-headline-large">{{ m.name }}</span>
                        </v-card>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(3, 33%);
    height: 60vh;
    width: 100%;
    gap: 16px;
}

.card {
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;

}
</style>