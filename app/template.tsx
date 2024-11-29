export default function Template({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="bg-orange-500 p-4 text-white">
                Title of Tempalte
            </div>
            <div>{children}</div>
        </div>
    );
}