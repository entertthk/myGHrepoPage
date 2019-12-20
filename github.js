class GitHub 
{
    constructor()
    {
        this.client_ID = '6a795547e48d739b4021';
        this.client_secret = '87cf133c1aa41d9ae10a13cda2c007db820b5d15';
        this.repos_count = 10;
        this.repos_sort ='created: asc';
        this.user = 'entertthk';
        this.apiUrl = 'https://api.github.com/users/';

    }

    async getUserData(){

        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        
        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }
}