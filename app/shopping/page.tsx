import ServerComponent from '../server-component/page';
import ClientComponent from '../client-component/page';
import Header from '../props/page';
import UserProfile from '../multi-props/page';

export default function Page() {
    return (
        <>
            <UserProfile name="Tavon" age={20} email="kob@gmail.com" isAdmin={true} />
            <div>Header and Props</div>
            <Header title="Kob" />

            <div>My Produts from Server</div>
            <ServerComponent />

            <div>My Produts from Client</div>
            <ClientComponent />
        </>
    );
}