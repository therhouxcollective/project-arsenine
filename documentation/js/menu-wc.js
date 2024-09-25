'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">arsenide documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/BankingModule.html" data-type="entity-link" >BankingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' : 'data-bs-target="#xs-controllers-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' :
                                            'id="xs-controllers-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' }>
                                            <li class="link">
                                                <a href="controllers/BankingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' : 'data-bs-target="#xs-injectables-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' :
                                        'id="xs-injectables-links-module-BankingModule-936a8bb0bbee0d27daf40d23a0145e3e35668f93ac0782f1801f7c777acc5fe848d7284214177a76b1cc6d19cc027c87e9d267c2700bba93ed95b77dc9ece180"' }>
                                        <li class="link">
                                            <a href="injectables/BankingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BankServiceModule.html" data-type="entity-link" >BankServiceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IdentityModule.html" data-type="entity-link" >IdentityModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' : 'data-bs-target="#xs-controllers-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' :
                                            'id="xs-controllers-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' : 'data-bs-target="#xs-injectables-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' :
                                        'id="xs-injectables-links-module-IdentityModule-808855406f10c683c2562874c6b38a08ddc414d7f3ba5c2faa9697f6553e2c60556b4839568fac6f28eb2dad92e55b8516aad75f71f0796f5aa4474960e9e526"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessengerModule.html" data-type="entity-link" >MessengerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' : 'data-bs-target="#xs-controllers-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' :
                                            'id="xs-controllers-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' }>
                                            <li class="link">
                                                <a href="controllers/MessagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' : 'data-bs-target="#xs-injectables-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' :
                                        'id="xs-injectables-links-module-MessengerModule-ada4057c08609caf0d774f8a3a79894716d078f93a004bcdbaa75969108c84ccd6570e70294fb89bab286e41de4d847510066c859fe3f24a2c803edce79358e8"' }>
                                        <li class="link">
                                            <a href="injectables/MessagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessagesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/V1Module.html" data-type="entity-link" >V1Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' : 'data-bs-target="#xs-controllers-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' :
                                            'id="xs-controllers-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' }>
                                            <li class="link">
                                                <a href="controllers/V1Controller.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >V1Controller</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' : 'data-bs-target="#xs-injectables-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' :
                                        'id="xs-injectables-links-module-V1Module-66a3b1c45825dce6aeb5f6f9d9a038666c436ba92879f27293b11f0455bf04b59360f83a2b3318b5bc06ce781e9c329f1ccbcdb60dc41635d2f4eaaa096ffd8b"' }>
                                        <li class="link">
                                            <a href="injectables/BankingGatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BankingGatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/LoginEntity.html" data-type="entity-link" >LoginEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/MessageLogEntity.html" data-type="entity-link" >MessageLogEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/StatementEntity.html" data-type="entity-link" >StatementEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseDto.html" data-type="entity-link" >BaseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataResponse.html" data-type="entity-link" >DataResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginCredentials.html" data-type="entity-link" >LoginCredentials</a>
                            </li>
                            <li class="link">
                                <a href="classes/MessageModel.html" data-type="entity-link" >MessageModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransactionDto.html" data-type="entity-link" >TransactionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDto.html" data-type="entity-link" >UserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});