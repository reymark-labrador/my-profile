interface JobProps {
    description: string;
}

interface WorkExperienceProps {
    position: string;
    company: string;
    location: string;
    dateFrom: string;
    dateTo: string;
    jobs: JobProps[];
}

export const WorkExperience: React.FC<WorkExperienceProps> = ({position, company, location, dateFrom, dateTo, jobs}) => {
    return (
        <>
            {position}<br/>
            {company} - {location}: {dateFrom} - {dateTo}
            <ul className="list-disc list-inside">
                {jobs.map((props) =>
                    <li>{props.description}</li>
                )}
            </ul><br/>
        </>
    );
};