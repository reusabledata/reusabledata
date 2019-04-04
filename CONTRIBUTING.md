### Before 

Thank you for your interest in contributing to the curated metadata of the (Re)usable Data Project. This page contains some best practices and hints for getting your new curation or fixes or current curations into our repository.

### Process

The best way to propose an evaluation or make a correction for inclusion would be as a personal fork to the repo. New resources should be YAML files named after the resource ID in the `data-sources/` directory. While corrections are naturally made in place, we would suggest using the resource template (https://github.com/reusabledata/reusabledata/blob/master/data-sources/source.template) for new resources. Once created the review process can be started with the creation of a pull request. This process can be done entirely through the GitHub interface if you are not familiar with command line git.

Once the pull request has been created, our system creates scores automatically from the annotations in the YAML data files, as well as performing a suite of sanity and consistency checks (using Travis CI). Besides these mechanical issues, a pull request is typically evaluated and discussed with at least one "core" member before being accepted. The conversation about a particular proposed evaluation or change should be done within the pull request, to keep our curation process open and followable.

Once an addition or update has been accepted by others and has proven to not be controversial (in which case the conversation continues) it is manually added to the system and the site is updated.

### Examples

An example of an evaluation in progress:

 https://github.com/reusabledata/reusabledata/pull/110/files

All evaluation files are named for the resource id and end in ".yaml". Examples of completed evaluations here:

 https://github.com/reusabledata/reusabledata/tree/master/data-sources

### Evaluation troubleshooting

#### The license of the resource does not seem to match the resource's aggregated sources' licenses

This is something that we have gone back and forth on a little. In general, we try and take a given license at face value--trying to determine upstream compliance for every resource, as well as figuring out downstream legal complexities, is quite difficult and time consuming. As well, we want to steer away from giving legal commentary on resources.

That said, there are some cases where there is an obvious issue or wording in the license that leads us to make some comment, often under license completeness or license scope. In the end, we have to rely on what a reasonable person who is interested might assume, which may require some internal conversation until we settle on a final pattern.

#### The criteria as given do not seem to apply to the resource's license

You may in fact have discovered a problem in the coverage of our criteria. Our criteria are still in developement as part of our community engagement are there are no doubt many cases that we have not yet considered. Please let us know in a ticket and we can engage with the issues that you have run into.

It may also be the case that we are currently discussing the issue and would very much like to hear your input. Several current discussions are listed in the tracker with the `enhancement` tag.

#### The barrier of relying on GitHub to create evaluations is very high...

We understand, but are unfortunately limited in the bandwidth we can apply to this problem. We currently have a ticket for discussion here of better/easier ways of making resource evaluations:

 https://github.com/reusabledata/reusabledata/issues/129

### Legal matters

While all of our code and data is currently available under the CC BY 4.0 license, to keep things clear for us in the future, in case there are unforseen changes, contributions should be understood to be assigned over to the (Re)usable Data Project.

### Thank you

Thank you again for being the first to try this from the outside and tackling our GitHub-oriented system. We really appreciate this and will try and use this to improve our documentation and processes.
