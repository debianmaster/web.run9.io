
- Install docker
- Install oc cli tool using this binary
https://github.com/openshift/origin/releases/tag/v3.9.0
- create local openshift cluster
`oc cluster up`
- Login to openshift
`oc login -u system:admin`

- run following commands to bring openshift webconsole
```sh

 mkdir  ~/git-repos
 cd ~/git-repos
 git clone https://github.com/openshift/origin-web-console.git

 cd ~/git-repos
 git clone https://github.com/openshift/origin-web-common.git


 cd ~/git-repos
 git clone https://github.com/openshift/origin-web-catalog.git

 cd ~/git-repos/origin-web-common
 bower link
 cd ~/git-repos/origin-web-catalog
 bower link
 cd ~/git-repos/origin-web-console
 bower link origin-web-common
 bower link origin-web-catalog

 rm -rf package-lock.json
 ./hack/install-deps.sh
 npm start
 ```
