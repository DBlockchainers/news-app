import React from 'react';
import './ShortsPara.css';

function ShortsPara() {
    return (
        <div>
            <div class="container">
                <h4 className="text-center mb-3">Test Article</h4>
                <p className="text-center mb-3">
                    Summarize these 1000 words into 100-150 words{' '}
                </p>
                <p className="text-center mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius nulla dictum lobortis amet aliquet aliquam aenean
                    augue turpis. Tristique tincidunt duis at morbi sed neque a
                    arcu. Nunc, ornare ut commodo tellus sodales iaculis
                    suspendisse in tincidunt. Blandit mauris cursus pretium id
                    et nunc. Tincidunt in tempus faucibus facilisi ultrices eget
                    congue faucibus. Vitae vel lectus morbi mauris ullamcorper
                    mollis elit enim. Nunc, a tellus nulla dignissim massa
                    neque, habitant. Sed vitae, et tortor eu, aliquam, facilisis
                    maecenas. Ipsum dui tincidunt ac tincidunt et non. Congue
                    fames enim proin pellentesque.
                </p>
                <textarea className="textarea my-3"></textarea>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <div>
                        <a href="/shorter">
                            <button
                                type="button"
                                class="btn btn-primary rounded-0"
                            >
                                Back
                            </button>
                        </a>
                    </div>
                    <div>
                        <button type="button" class="btn btn-primary rounded-0">
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShortsPara;
